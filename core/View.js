class View {
    render(res, view, data) {
        return res.render(view, { ...data });
    }
}

module.exports = View;