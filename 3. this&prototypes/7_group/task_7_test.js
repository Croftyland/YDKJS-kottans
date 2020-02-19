var game = new SnakesLadders();
Test.assertEquals(game.play(1, 1), "Player 1 is on square 38", "Should return: 'Player 1 is on square 38'");
Test.assertEquals(game.play(1, 5), "Player 1 is on square 44", "Should return: 'Player 1 is on square 44'");
Test.assertEquals(game.play(6, 2), "Player 2 is on square 31", "Should return: 'Player 2 is on square 31'");
Test.assertEquals(game.play(1, 1), "Player 1 is on square 25", "Should return: 'Player 1 is on square 25'");
