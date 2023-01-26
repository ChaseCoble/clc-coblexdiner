function vpdetect() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if (height <= 800) {
        if (width <= 400) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export default function vpdetect()
