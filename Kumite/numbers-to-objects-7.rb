//https://www.codewars.com/kumite/57e01eeaf5ec1668f200011d?sel=57e01eeaf5ec1668f200011d

Test.describe("Basic tests") do
Test.assert_equals(numObj([118,117,120]), [{"118"=>"v"}, {"117"=>"u"}, {"120"=>"x"}])
Test.assert_equals(numObj([101,121,110,113,113,103]), [{"101"=>"e"}, {"121"=>"y"}, {"110"=>"n"}, {"113"=>"q"}, {"113"=>"q"}, {"103"=>"g"}])
Test.assert_equals(numObj([118,103,110,109,104,106]), [{"118"=>"v"}, {"103"=>"g"}, {"110"=>"n"}, {"109"=>"m"}, {"104"=>"h"}, {"106"=>"j"}])
Test.assert_equals(numObj([107,99,110,107,118,106,112,102]), [{"107"=>"k"}, {"99"=>"c"}, {"110"=>"n"}, {"107"=>"k"}, {"118"=>"v"}, {"106"=>"j"}, {"112"=>"p"}, {"102"=>"f"}])
Test.assert_equals(numObj([100,100,116,105,117,121]), [{"100"=>"d"}, {"100"=>"d"}, {"116"=>"t"}, {"105"=>"i"}, {"117"=>"u"}, {"121"=>"y"}])
end

Test.describe("Random tests") do

  def randint(a,b) rand(b-a+1)+a end
  
  def sol(s)
  	s.map { |arg| {arg.to_s => arg.chr} }
  end

  nums = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];

  40.times do
    arr = []
    randint(1,15).times do
      arr.push(nums[randint(0,nums.length-1)])
    end
    puts arr
    Test.it("Testing for #{arr.inspect}") do
      Test.assert_equals(numObj(arr),sol(arr),"It should work for random inputs too")
    end
  end
end