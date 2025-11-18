import {describe, it} from 'mocha';
import {expect} from 'chai';

import {validateDate, validateIPV6} from './validators';

// Tests for the validateDate function
describe('validateDate', () => {
	it('should return a Date for valid DD/MM/YYYY', () => {
		expect(validateDate('18/11/2025')).to.be.an.instanceof(Date);
		expect(validateDate('01/01/2000')).to.be.an.instanceof(Date);
	});

	it('should return null for invalid date format', () => {
		expect(validateDate('2025-11-18')).to.be.null;
		expect(validateDate('2025/11/18')).to.be.null;
		expect(validateDate('20251118')).to.be.null;
	});

	it('should return null for impossible dates', () => {
		expect(validateDate('30/02/2025')).to.be.null;
		expect(validateDate('01/13/2025')).to.be.null;
		expect(validateDate('10/00/2025')).to.be.null;
	});

	it('should return null for empty or null input', () => {
		expect(validateDate('')).to.be.null;
		expect(validateDate(null as any)).to.be.null;
		expect(validateDate(undefined as any)).to.be.null;
	});
});