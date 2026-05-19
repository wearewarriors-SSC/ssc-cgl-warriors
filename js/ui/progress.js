export function renderProgress(
    element,
    percentage
) {

    element.innerHTML = `
        <div
            style="
                width:100%;
                background:#1e293b;
                border-radius:20px;
                overflow:hidden;
            "
        >
            <div
                style="
                    width:${percentage}%;
                    background:#6366f1;
                    color:white;
                    padding:8px;
                "
            >
                ${percentage}%
            </div>
        </div>
    `
}
