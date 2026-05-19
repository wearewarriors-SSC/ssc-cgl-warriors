export function renderBadge(
    container,
    text
) {

    const badge =
    document.createElement('span')

    badge.innerText =
    text

    badge.style.background =
    '#6366f1'

    badge.style.padding =
    '6px 12px'

    badge.style.borderRadius =
    '12px'

    badge.style.margin =
    '4px'

    container.appendChild(
        badge
    )
}
