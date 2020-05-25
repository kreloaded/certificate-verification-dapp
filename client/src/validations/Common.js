class CommonValidator {
  static validateNonEmptyObject(variable) {
    if (CommonValidator.isVarNullOrUndefined(variable) || typeof variable !== 'object') {
      return false;
    }

    for (const prop in variable) {
      try {
        if (Object.prototype.hasOwnProperty.call(variable, prop)) {
          return true;
        }
      } catch (error) {
        return false;
      }
    }

    return false;
  }

  static isVarNullOrUndefined(variable) {
    return typeof variable === 'undefined' || variable == null;
  }
}

module.exports = CommonValidator;
