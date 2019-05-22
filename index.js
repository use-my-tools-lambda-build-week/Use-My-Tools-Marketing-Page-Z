class PageLink {
    constructor(pageElement) {
        this.pageElement = pageElement;
        this.pageData = this.pageElement[`data-page='${this.pageElement.dataset.page}'`]
        this.pageContent = document.querySelector(`.content[data-page='${this.pageElement.dataset.page}']`)
        this.pageElement.addEventListener('click', () => this.selectPage())
    }
    selectPage() {
        const pages = document.querySelectorAll('.navbar')
        for (let i = 0; i < pages.length; i++) {
            pages[i].classList.remove('active-page')
        }
        const contents = document.querySelectorAll('.content')
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        this.pageElement.classList.add('active-page')
        this.pageContent.style.display = 'flex';
    }
}

let links = document.querySelectorAll('.navbar')
let contents = document.querySelectorAll('.content')

contents[0].style.display = 'flex'
links.forEach(link => new PageLink(link))
