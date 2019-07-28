require("minitest/autorun")
require_relative("../card_game.rb")
require_relative("../card.rb")


class TestCardGame < MiniTest::Test

  def setup()
    @card_game = CardGame.new()
    @card1 = Card.new('spades', 1)
    @card2 = Card.new('hearts', 5)
    @card3 = Card.new('diamonds', 7)
    @cards = [@card1, @card2, @card3]
  end

  def test_check_for_ace__true()
    result = @card_game.check_for_ace(@card1)
    assert_equal(true, result)
  end

  def test_check_for_ace__false()
    result = @card_game.check_for_ace(@card2)
    assert_equal(false, result)
  end

  def test_highest_card()
    result = @card_game.highest_card(@card2, @card3)
    assert_equal(@card3, result)
  end

  def test_cards_total()
    result = CardGame.cards_total(@cards)
    assert_equal('You have a total of 13', result)
  end

end
