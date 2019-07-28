class CardGame #Card class file has not been required so methods cannot be called on card instances.
  #The class has not been initilaised.


  def checkforAce(card) #There shouldn't be any capital letters in the method name. Underscores should be used between words.
    if card.value = 1 # there should be a double equals here (==)
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #dif should be def. There should be a comma between card1 and card2.
  if card1.value > card2.value
    return card #this should be card1
  else
    return card2
  end
end
end #theres an extra end here.

def self.cards_total(cards)
  total #total should be set to a value
  for card in cards
    total += card.value
    return "You have a total of" + total # There should be a space after of, total needs to be turned into a string and the return should come after the the for loop has ended. i.e after the end on line 26.
  end
end
