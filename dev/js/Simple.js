/**
 * ...
 * @author Oliver Ross
 */
define({
	add:function(op1, op2) {
		if(typeof(op1) !== 'number') { throw new Error('"' + op1 + '" is not a valid argument to add'); }
		if(typeof(op2) !== 'number') { throw new Error('"' + op2 + '" is not a valid argument to add'); }
		return op1 + op2;
	},
	sub:function(op1, op2) {
		if(typeof(op1) !== 'number') { throw new Error('"' + op1 + '" is not a valid argument to sub'); }
		if(typeof(op2) !== 'number') { throw new Error('"' + op2 + '" is not a valid argument to sub'); }
		return op1 - op2;
	},
	mul:function(op1, op2) {
		if(typeof(op1) !== 'number') { throw new Error('"' + op1 + '" is not a valid argument to mul'); }
		if(typeof(op2) !== 'number') { throw new Error('"' + op2 + '" is not a valid argument to mul'); }
		return op1 * op2;
	},
	div:function(op1, op2) {
		if(typeof(op1) !== 'number') { throw new Error('"' + op1 + '" is not a valid argument to div'); }
		if(typeof(op2) !== 'number') { throw new Error('"' + op2 + '" is not a valid argument to div'); }
		return op1 / op2;
	}
});