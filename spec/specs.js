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
	
	it('will return equilateral if all sides are the same', function(){
		expect(triangleName("2", "2", "2")).to.equal("its an equilateral traingle!")
	});
	it('will return isosceles if twos sides are the same', function(){
		expect(triangleName("2", "3", "2")).to.equal("its a isosceles traingle!")
	});
	it('will return scalene if no sides are the same', function(){
		expect(triangleName("3", "4", "5")).to.equal("its a scalene triangle!")
	});
});
