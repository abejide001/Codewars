# https://www.codewars.com/kata/5748a883eb737cab000022a6

def cannons_ready(gunners)
  	doubt = 0
	gunners.each do |key ,value|
 		if value == 'nay' then
 			doubt = 1
 			break
 		end
	end
	if doubt == 0 then
		"Fire!"
	else
		"Shiver me timbers!"
	end
end
