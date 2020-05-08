var express = require("express");

const router = express.Router();

router.get('/pullone', (req, res) => {
    sleep(500).then(() => {
    res.json('Pull One Data');
    })
});

router.get('/pulltwo', (req, res) => {
    sleep(750).then(() => {
        res.json('Pull Two Data');
        })
});

router.get('/pullthree', (req, res) => {
    sleep(1000).then(() => {
        res.json('Pull Three Data');
        })
});

router.get('/pullfour', (req, res) => {
    sleep(1500).then(() => {
        res.json('Pull Four Data');
        })
});

router.get('/useeffectone', (req, res) => {
    sleep(1750).then(() => {
    res.json('useEffect One Data');
    })
});
router.get('/useeffecttwo', (req, res) => {
    sleep(1750).then(() => {
    res.json('useEffect Two Data');
    })
});

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

module.exports = router;