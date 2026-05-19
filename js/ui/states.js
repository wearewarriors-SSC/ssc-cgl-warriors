export function showLoading(
    container
) {

    container.innerHTML = `

        <div class="presence-card">

            Loading...

        </div>
    `
}

export function showEmpty(
    container,
    text='No data found'
) {

    container.innerHTML = `

        <div class="presence-card">

            ${text}

        </div>
    `
}
