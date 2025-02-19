   
export const handleUrlClick = (url) => {
    if (!url) return
    window.open(url, '_blank')
}