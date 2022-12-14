function superbowlWin(data) {
    const frank = data.find(element => element.result == "W")
    if (frank != undefined) {
        return frank.year
    }else {
        return frank;
    }
}

superbowlWin(record);