// just testing out a next.js api endpoint

export default function handler(req, res) {
    res.status(200).json({
        text: 'Hello! What have you done today to help make this world a better place to live in?'
    })
}