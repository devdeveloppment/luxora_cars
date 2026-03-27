import os
import re

def split_html():
    with open('luxora_cars/index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Base HTML setup
    # Header part (with styles and script imports moved to base.html)
    base_parts = content.split('<body>')
    head_content = base_parts[0]
    body_content = base_parts[1].split('</body>')[0]

    # Extract Nav
    nav_match = re.search(r'(<nav id="nav">.*?</nav>)', body_content, re.DOTALL)
    nav_html = nav_match.group(1) if nav_match else ""

    # Extract Mobile Menu
    mm_match = re.search(r'(<div class="mm" id="mm">.*?</div>)', body_content, re.DOTALL)
    mm_html = mm_match.group(1) if mm_match else ""

    # Extract Footer
    footer_match = re.search(r'(<footer id="ft">.*?</footer>)', body_content, re.DOTALL)
    footer_html = footer_match.group(1) if footer_match else ""

    # Extract Pages
    pages = {
        'home': r'(<!-- HOME -->.*?<!-- CATALOGUE -->)',
        'catalog': r'(<!-- CATALOGUE -->.*?<!-- DETAIL -->)',
        'detail': r'(<!-- DETAIL -->.*?<!-- SELL -->)',
        'sell': r'(<!-- SELL -->.*?<!-- ACCOUNT -->)',
        'account': r'(<!-- ACCOUNT -->.*?<!-- ADMIN -->)',
        'admin': r'(<!-- ADMIN -->.*?<!-- CONTACT -->)',
        'contact': r'(<!-- CONTACT -->.*?<!-- FOOTER -->)'
    }

    # Extract other elements (toast, chat, back to top)
    others_match = re.search(r'(<div id="toast">.*?</div>.*?<div id="cb".*?>.*?</div>.*?<div id="bt".*?>.*?</div>)', body_content, re.DOTALL)
    others_html = others_match.group(1) if others_match else ""

    # Extract Modals
    modals_match = re.search(r'(<!-- MODALS -->.*)', body_content, re.DOTALL)
    modals_html = modals_match.group(1) if modals_match else ""

    # Write partials
    os.makedirs('templates/partials', exist_ok=True)
    with open('templates/partials/nav.html', 'w', encoding='utf-8') as f: f.write(nav_html + "\n" + mm_html)
    with open('templates/partials/footer.html', 'w', encoding='utf-8') as f: f.write(footer_html)
    with open('templates/partials/others.html', 'w', encoding='utf-8') as f: f.write(others_html)
    with open('templates/partials/modals.html', 'w', encoding='utf-8') as f: f.write(modals_html)

    for p_name, p_regex in pages.items():
        match = re.search(p_regex, body_content, re.DOTALL)
        if match:
            with open(f'templates/partials/{p_name}.html', 'w', encoding='utf-8') as f:
                f.write(match.group(1))

if __name__ == "__main__":
    split_html()
