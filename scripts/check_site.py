"""Check the static site's links, translation pairs and contact-form contract."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[1]
errors = []


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.ids = set()
        self.fragments = []
        self.headings = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.headings += tag == "h1"
        if "id" in attrs:
            if attrs["id"] in self.ids:
                errors.append(f"{self.path}: duplicate id {attrs['id']}")
            self.ids.add(attrs["id"])
        if "data-en" in attrs and not attrs.get("data-ru"):
            errors.append(f"{self.path}: missing Russian translation")
        for key in ("href", "src"):
            value = attrs.get(key, "")
            url = urlparse(value)
            if not value or url.scheme or url.netloc:
                continue
            if url.path:
                target = self.path.parent / unquote(url.path)
                if target.is_dir():
                    target /= "index.html"
                if not target.exists():
                    errors.append(f"{self.path}: broken {value}")
            elif url.fragment:
                self.fragments.append(url.fragment)


pages = list(ROOT.rglob("*.html"))
for path in pages:
    page = Page(path)
    page.feed(path.read_text())
    if page.headings != 1:
        errors.append(f"{path}: expected one h1, found {page.headings}")
    for fragment in page.fragments:
        if fragment not in page.ids:
            errors.append(f"{path}: unknown #{fragment}")

contact = (ROOT / "contact/index.html").read_text()
assert 'method="post"' in contact
assert 'action="https://formsubmit.co/' in contact
assert 'name="_subject" value="[Portfolio]' in contact
assert 'name="email"' in contact and 'name="message"' in contact
assert not errors, "\n".join(errors)
print(f"Checked {len(pages)} pages: links, assets, headings, translations and form.")
