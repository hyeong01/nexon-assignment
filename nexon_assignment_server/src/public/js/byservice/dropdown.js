'use strict'

const serviceArr = ['https://i.imgur.com/qE1fXAM.png', 'https://i.imgur.com/n2NMAdV.png', 'https://i.imgur.com/h5bQGKi.png', 'https://i.imgur.com/oNPFDdM.png', 'https://i.imgur.com/7lpWXcE.png', 'https://i.imgur.com/CMpICK3.png', 'https://i.imgur.com/0qu0TP8.png', 'https://i.imgur.com/BmtT3DA.png', 'https://i.imgur.com/q2ivnEx.png', 'https://i.imgur.com/qWb8APj.png', 'https://i.imgur.com/arWTedq.png', 'https://i.imgur.com/2ECBJHV.png', 'https://i.imgur.com/VXvhfsF.png', 'https://i.imgur.com/PgLHHJb.png', 'https://i.imgur.com/FqmzEHd.png', 'https://i.imgur.com/PabduXu.png', 'https://i.imgur.com/oaCPaqh.png', 'https://i.imgur.com/GBp8DBX.png', 'https://i.imgur.com/JIJzD6e.png', 'https://i.imgur.com/jLSCRnR.png', 'https://i.imgur.com/9L1uNqx.png', 'https://i.imgur.com/2yK1W8c.png']

function byServiceDropdown(service) {
  document.getElementById("octa_iamge").src = serviceArr[service-1]
};