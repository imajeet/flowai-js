/**
 * Exception
 * @class
 * @property {string} message - Human friendly message
 * @property {string} type - Kind of error
 * @property {Exception} innerException - Inner exception
 **/
class Exception {

  /**
   * Constructor
   * @param {string} message - message - Human friendly message
   * @param {string} type - Kind of error
   * @param {Exception} innerException - Optional inner exception
   **/
  constructor(message, type, innerException) {
    if(message instanceof Error) {
      const err = message
      this.message = err.message || "Unknown error"
      this.type = type || "Generic exception"
      this.innerException = err || null
    } else if(message instanceof Exception) {
      return message
    } else if(typeof(message) !== 'string') {
      throw new Error('Empty error message for Exception')
    } else {
      this.message = message || "Unknown error"
      this.type = type || "Generic exception"
      this.innerException = innerException || null
    }
  }
}

export default Exception
