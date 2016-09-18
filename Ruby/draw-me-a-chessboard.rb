# https://www.codewars.com/kata/56242b89689c35449b000059

def chess_board(columns, rows)
	ans = Array.new(columns) { Array.new() }
	ans[0].push("O")
	ans.each_with_index do |val, i|
		while ans[i].length < rows do
			if ans[i].empty? then
				ans[i-1].first == "O" ? ans[i].push("X") : ans[i].push("O")
				next
			end
			ans[i].last == "X" ? ans[i].push("O") : ans[i].push("X")
		end
	end
  return ans
end
