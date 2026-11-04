/**
 * ============================================================================
 * COMPONENTESXD — 02. 6-Digit 2FA OTP Auto-Advance Matrix (VANILLA JS CONTROLLER)
 * Archivo: components/forms/variants/otp-security-matrix/otp-security-matrix.js
 * ============================================================================
 */

export function initOtpSecurityMatrix(selector = '.cxd-forms-otp-security-matrix') {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.setAttribute('data-hydrated', 'true');
  });
  return elements.length;
}
