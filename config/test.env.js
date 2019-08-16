module.exports = merge(devEnv, {
    NODE_ENV     : '"testing"',
    ROOT_API     : '"ceta-sinclave-homo.cloudhomo.afip.gob.ar"',
    pathBackend  : '"ceta-sinclave-homo.cloudhomo.afip.gob.ar"',
    portBackend  : '3000',
    urlPDF       : ' "http://10.30.216.108/reports/rwservlet?report=certificado.rdf&cmdkey=fisco&destype=cache&desformat=PDF&server=rep_fisca&p_frm_certificado=" ',
    // keySite     : '"6Lfyn3IUAAAAAHSsnv7NlAkB9OweVY1rztVY83w5"',
    // keySecret   : '"6Lfyn3IUAAAAADmrAHfafZUTS8JXb7tUCsMU5a_G"'
    
  })