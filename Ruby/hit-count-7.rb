# https://www.codewars.com/kata/57b6f850a6fdc76523001162

def counter_effect(hit_count)
    ans = [[0],[0],[0],[0]]
	for i in 0..3
		for k in 1..hit_count[i].to_i
			ans[i].push(k)
		end
	end
    return ans
end
