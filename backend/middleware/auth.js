const ethers = require('ethers')

const config = process.env;

const verifySignature = (req, res, next) => {
  const signature =
    req.body.signature || req.query.signature

  console.log(signature)
  if (!signature) {
    return res.status(403).send("A signature is required for authentication")
  }
  try {
    // verify signature here
    const message = 'Signing in to expresswage'
    const recoveredAddress = recoverWalletAddress(signature, message)
    req.user = recoveredAddress

  } catch (err) {
    return res.status(401).json({message: "Invalid signature"})
  }
  return next();
};

function recoverWalletAddress(signature, message) {
    const recoveredAddress = ethers.verifyMessage(message, signature)
    return recoveredAddress
}

module.exports = verifySignature