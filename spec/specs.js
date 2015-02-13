describe('triangleName', function(){
	it('will return whether it is a triangle or not', function(){
		expect(triangleName("2", "2", "8")).to.equal("not a triangle!");	
	});
	
	it('will return whether it is a triangle or not', function(){
		expect(triangleName("20", "2", "8")).to.equal("not a triangle!");	
	});
	it('will return whether it is a triangle or not', function(){
		expect(triangleName("2", "20", "8")).to.equal("not a triangle!");	
	});
});
