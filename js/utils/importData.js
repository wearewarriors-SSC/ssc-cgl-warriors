export function importJSON(
    file,
    callback
) {

    const reader =
    new FileReader()

    reader.onload =
    event => {

        const data =
        JSON.parse(
            event.target.result
        )

        callback(data)
    }

    reader.readAsText(file)
}
