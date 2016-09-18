# https://www.codewars.com/kata/563b662a59afc2b5120000c6
def nb_year(p0, percent, aug, p)
    curr_pop = p0
    year = 0

    while curr_pop < p do
      year+=1
      curr_pop = curr_pop + (curr_pop * (percent.round(2)/100)) + aug
    end
    year
end
