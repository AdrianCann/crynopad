# Crynopad

## Encrypt notes in your browser
* Storing encrypted data normally relies on an external server handling your
  password and data correctly. That data may be sent securely over `https`, but
  that does not guarantee it will be handled correctly on the server. Your
  message or password could be accidentally written to a log file in plain text
  before the encryption happens. This ensures it is already encrypted before it
  is sent over the wire.
* Notes can be encrypted and stored in your browser's local storage. You do not
  need to trust a server with your password or note contents.

## Uses a JavaScript encryption library
* https://bitwiseshiftleft.github.io/sjcl/
