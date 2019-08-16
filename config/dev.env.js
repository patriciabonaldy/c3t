'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV    : '"development"',
  DEBUG_MODE  : true,
  ROOT_API    : '"http://localhost:8080/ceta"',
  API_URL     : '"http://localhost:3000/api/v1"',
  urlPDF      : '"http://10.30.216.108/reports/rwservlet?report=certificado.rdf&cmdkey=fisco_desa&destype=cache&desformat=PDF&server=rep_fisca&p_frm_certificado=" ',
  // keySite     : '"6Lfyn3IUAAAAAHSsnv7NlAkB9OweVY1rztVY83w5"',
  // keySecret   : '"6Lfyn3IUAAAAADmrAHfafZUTS8JXb7tUCsMU5a_G"'
  
})
