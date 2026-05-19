export async function loadLayout() {

    const response =
    await fetch(
        '../components/layout.html'
    )

    const html =
    await response.text()

    const container =
    document.createElement('div')

    container.innerHTML =
    html

    document.body.prepend(
        container
    )
}
