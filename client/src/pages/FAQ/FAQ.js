import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./FAQ.css";



const spacer = {
  height: '100px'
};


const FAQ = () => (
  <Container>

    <a className="scroll-top-button" href="#glossaryTop" style={{display: 'inline'}}>top</a>
  <div id="glossaryTop" className="article-intro-container with-searchbar .glossary-top">
            <div className="global-width">
                <h1>Glossary</h1>
<p>Learn the meaning of common betting terms</p>

        </div>
        </div>
    
  <div className="anchors-container">
            <div className="global-width">
                 

<div className="anchors"> 
  <a className="" href="#letter_A">a</a>
  <a className="" href="#letter_B">b</a>
  <a className="" href="#letter_C">c</a>
  <a className="" href="#letter_D">d</a>
  <a className="" href="#letter_E">e</a>
  <a className="" href="#letter_F">f</a>
  <a className="" href="#letter_G">g</a>
  <a className="" href="#letter_H">h</a>
  <a className="" href="#letter_I">i</a>
  <a className="" href="#letter_J">j</a>
  <a className="" href="#letter_K">k</a>
  <a className="" href="#letter_L">l</a>
  <a className="" href="#letter_M">m</a>
  <a className="" href="#letter_N">n</a>
  <a className="" href="#letter_O">o</a>
  <a className="" href="#letter_P">p</a>
  <a className="" href="#letter_Q">q</a>
  <a className="" href="#letter_R">r</a>
  <a className="" href="#letter_S">s</a>
  <a className="" href="#letter_T">t</a>
  <a className="" href="#letter_U">u</a>
  <a className="" href="#letter_V">v</a>
  <a className="" href="#letter_W">w</a>
  <a className="empty" href="#letter_X">x</a>
  <a className="empty" href="#letter_Y">y</a>
  <a className="empty" href="#letter_Z">z</a>
</div>
            </div>
        </div>
    <div className="global-width">
                <div style={spacer}>
                </div>

                <div id="letter_A" className="letter " data-letter="a">
                  <ul>
                          <li>
                              <p id="accum" className="glossary-item">Accumulator <em>(see also <a href="#multiple">Multiple</a>, <a href="#parlay">Parlay</a>)</em></p>
                              <p>Where more than one bet is combined, and success is dependent on all selections winning.</p>
                          </li>
                          <li>
                              <p id="added-g" className="glossary-item">Added game</p>
                              <p>A game not part of the Las Vegas regular rotation. A bookmaker may offer odds after a request from a bettor.</p>
                          </li>
                          <li>
                              <p id="aet" className="glossary-item">AET</p>
                              <p>Soccer abbreviation for ‘After Extra Time’, the additional time played if the game ends in a tie.</p>
                          </li>
                          <li>
                              <p id="alt-lines" className="glossary-item">Alternate lines</p>
                              <p>Derivatives of standard betting markets. Examples include Alternate Handicaps or Alternate Totals which offer higher or lower spread or totals with odds changing accordingly.</p>
                          </li>
                          <li>
                              <p id="am-odds" className="glossary-item">American odds</p>
                              <p>Odds expression indicating return relative to 100 unit base figure. Whenever there is a minus (-) you lay that amount to win $100, where there is a plus (+) you win&nbsp;that amount for every $100 you bet.</p>
                          </li>
                          <li>
                              <p id="ante-p" className="glossary-item">Ante-post <em>(see also <a href="#future">Future</a>, <a href="#outright-b">Outright betting</a>)</em></p>
                              <p>Early market offered in advance of the definitive list of participants.</p>
                          </li>
                          <li>
                              <p id="arb" className="glossary-item">Arb</p>
                              <p>Abbreviation for arbitrage.</p>
                          </li>
                          <li>
                              <p id="arbitrage" className="glossary-item">Arbitrage <em>(see also <a href="#hedge">Hedging</a>)</em></p>
                              <p>Backing all selections within a market, across several bookmakers, to exploit the price discrepancies and guarantee a positive return.</p>
                          </li>
                          <li>
                              <p id="asian-h" className="glossary-item">Asian Handicap</p>
                              <p>Two-way market that uses a point/goal Handicap to alter perceived bias between two competing teams and also eliminates the possibility of a draw.</p>
                          </li>
                          <li>
                              <p id="ats" className="glossary-item">ATS</p>
                              <p>Acronym meaning against the Spread. ATS is betting on a selection that is giving away points/goals and opposing the perceived logic of the spread.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_B" className="letter " data-letter="b">
                  <ul>
                          <li>              
                              <p id="banker" className="glossary-item">Banker <em>(see also <a href="#lock">Lock</a>)</em></p>
                              <p>Strongly favored selection around which multiple bets are often built.</p>
                          </li>
                          <li>              
                              <p id="beard" className="glossary-item">Beard</p>
                              <p>Third-party bettor used to conceal the true identity of the real bettor.</p>
                          </li>
                          <li>              
                              <p id="best-price-p" className="glossary-item">Best-price percentage</p>
                              <p>The inherent advantage a bookmaker holds within a given market.</p>
                          </li>
                          <li>              
                              <p id="bet" className="glossary-item">Bet <em>(see also <a href="#wager">Wager</a>)</em></p>
                              <p>Risk money on the outcome of an event with the return proportionate to the perceived likelihood as measured by odds.</p>
                          </li>
                          <li>              
                              <p id="betting-ex" className="glossary-item">Betting exchange</p>
                              <p>A betting site that doesn’t accept bets, but instead matches backers (those betting on odds) with layers (those offering the odds) taking a commission on the winning bets.</p>
                          </li>
                          <li>              
                              <p id="betting-stra" className="glossary-item">Betting strategy</p>
                              <p>A systemic approach to placing bets designed to generate an edge for the bettor over the bookmaker or house.</p>
                          </li>
                          <li>              
                              <p id="binary-b" className="glossary-item">Binary betting <em>(see also <a href="#fixed-odds">Fixed-odds betting</a>, <a href="#spread-b">Spread betting</a>)</em></p>
                              <p>A combination of spread and fixed-odds betting with only two outcomes 0 or 100, with the bet struck against a bid or offer somewhere between the two, for an agreed unit stake.</p>
                          </li>
                          <li>              
                              <p id="board-p" className="glossary-item">Board price</p>
                              <p>The price available to bettors from bookmakers who operate trackside at horse or greyhound racing.</p>
                          </li>
                          <li>              
                              <p id="bonus" className="glossary-item">Bonus</p>
                              <p>A conditional incentive given by bookmakers to entice new or existing account holders to betting activity.</p>
                          </li>
                          <li>              
                              <p id="bonus-ch" className="glossary-item">Bonus-chasing</p>
                              <p>Opening new accounts for the sole purpose of exploiting the bonus offers.</p>
                          </li>
                          <li>              
                              <p id="book" className="glossary-item">Book/Bookie <em>(see also <a href="#sportsbook">Sportsbook</a>)</em></p>
                              <p>Abbreviation for Bookmaker. An establishment/individual offering odds on the outcome of events, usually but not exclusively sports, for the purpose of accepting bets.</p>
                          </li>
                          <li>              
                              <p id="buy-points" className="glossary-item">Buy points&nbsp;<em>(see also <a href="#sell-points">Sell points</a>)</em></p>
                              <p>Accepting inferior odds in exchange for an increased point spread advantage.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_C" className="letter " data-letter="c">
                  <ul>
                          <li>
                              <p id="can-line" className="glossary-item">Canadian line</p>
                              <p>A combination of Points Spread and Money Line in hockey.</p>
                          </li>
                          <li>
                              <p id="chalk" className="glossary-item">Chalk <em>(see also <a href="#fav">favorite</a>, <a href="#jolly">Jolly</a>)</em></p>
                              <p>The option in any given betting market considered most likely to win as measured by the implied probability of the odds.</p>
                          </li>
                          <li>
                              <p id="circled-g" className="glossary-item">Circled game</p>
                              <p>A game in which the bet limits are capped at modest levels. Usually occurs when markets are first displayed; in added games; Specials; in reaction to bad weather, injuries or suspect betting patterns; halves of games.</p>
                          </li>
                          <li>
                              <p id="clo-line" className="glossary-item">Closing line</p>
                              <p>The last available odds offered before a market closes. Bettors who "<em>beat the closing line</em>" have placed a bet offering a superior return to the final odds offered; consistently beating the closing line is a sign of a successful bettor.</p>
                          </li>
                          <li>
                              <p id="clo-odds" className="glossary-item">Closing odds</p>
                              <p>The last available odds offered before a market closes. Bettors who "<em>beat the closing odds</em>" have placed a bet offering a superior return to the final odds offered; consistently beating the closing odds is a sign of a successful bettor.</p>
                          </li>
                          <li>
                              <p id="co-fav" className="glossary-item">Co-favorite</p>
                              <p>Where three or more selections are priced as favorite.</p>
                          </li>
                          <li>
                              <p id="commission" className="glossary-item">Commission <em>(see also <a href="#juice">Juice</a>, <a href="#margin">Margin</a>, <a href="#vig">Vigorish</a>)</em></p>
                              <p>The cost of placing a bet calculated by summing the implied probability and subtracting from 100, the measure of a fair market. In relation to Exchange betting, commission is the charge applied to winning bets, applied as a %.</p>
                          </li>
                          <li>
                              <p id="correct-score" className="glossary-item">Correct score</p>
                              <p>Soccer bet where the bettor predicts both the winning team and the correct final score of the game.</p>
                          </li>
                          <li>
                              <p id="cover" className="glossary-item">Cover</p>
                              <p>When a favorite wins by more than the required number of points in a Handicap/Spread bet.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_D" className="letter " data-letter="d">
                  <ul>
                          <li>
                              <p id="dec-odds" className="glossary-item">Decimal odds</p>
                              <p>An odds expression (sometimes referred to as European odds) where the odds are shown in decimal format.</p>
                          </li>
                          <li>
                              <p id="dime" className="glossary-item">Dime</p>
                              <p>Slang term for a $1000 sports bet.</p>
                          </li>
                          <li>
                              <p id="dog" className="glossary-item">Dog</p>
                              <p>Abbreviation of underdog; the selection perceived by the market as least likely to win.</p>
                          </li>
                          <li>
                              <p id="double-action" className="glossary-item">Double action</p>
                              <p>A bet which is conditional on the success of a preceding bet.</p>
                          </li>
                          <li>
                              <p id="double-b" className="glossary-item">Double bet</p>
                              <p>Where a bettor plays twice the amount of a usual bet, normally in reaction to a perceived ‘good thing’. Also known as "double pop" or "doubling up".</p>
                          </li>
                          <li>
                              <p id="double-res" className="glossary-item">Double result</p>
                              <p>A conditional bet that combines the result at half-time with the result at full-time.</p>
                          </li>
                          <li>
                              <p id="double-head" className="glossary-item">Double-header</p>
                              <p>Two high-profile games played close to each other on the same day.</p>
                          </li>
                          <li>
                              <p id="draw" className="glossary-item">Draw <em>(see also <a href="#push">Push</a>, <a href="#tie">Tie</a>)</em></p>
                              <p>When the contest ends with no winner or loser.</p>
                          </li>
                          <li>
                              <p id="drift" className="glossary-item">Drift</p>
                              <p>When odds lengthen, implying a decreased likelihood of the event occurring; odds are said to have drifted or are "on the drift".</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_E" className="letter " data-letter="e">
                  <ul>
                          <li>
                              <p id="ew" className="glossary-item">Each-way</p>
                              <p>A bet that comprises two independent bets, one for the selection winning and one for the selection placing e.g 2nd or 3rd. Place conditions vary in relation to the number of participants. Mostly commonly, but not exclusively, used in horse and greyhound racing.</p>
                          </li>
                          <li>
                              <p id="edge" className="glossary-item">Edge</p>
                              <p>Betting advantage either gained by consistently exploiting a bookmaker’s margins or derived from proprietary knowledge.</p>
                          </li>
                          <li>
                              <p id="elo-rat" className="glossary-item">Elo ratings</p>
                              <p>Invented by Hungarian-born American master level chess player and physics professor Arpad Elo. A way of comparing the skill levels of players in competitor-versus-competitor games.</p>
                          </li>
                          <li>
                              <p id="ev-money" className="glossary-item">Even money</p>
                              <p>A bet which returns exactly what is staked, represented as odds of 1/1, 2.0 or +100.</p>
                          </li>
                          <li>
                              <p id="exotic" className="glossary-item">Exotic <em>(see also <a href="#special">Special</a>, <a href="#prop">Proposition</a>)</em></p>
                              <p>Any bet other than a straight bet or a Multiple.</p>
                          </li>
                          <li>
                              <p id="expected-goals" className="glossary-item">Expected goals</p>
                              <p>The number of goals a team (or teams) would expect to score in a match. This is determined by assigning a value to shots on goal, the number of shots, shot location, the in-game situation and the proximity of opposition defenders.</p>
                          </li>
                          <li>
                              <p id="ex-value" className="glossary-item">Expected value</p>
                              <p>The amount a player can expect to win or lose if they were to place a bet on the same odds many times over, calculated through a simple equation multiplying your probability of winning with the amount you could win per bet, and subtracting the probability of losing multiplied by the amount lost per bet.</p>
                          </li>
                          <li>
                              <p id="exposure" className="glossary-item">Exposure</p>
                              <p>Potential losses to which a sportsbook or bettor is exposed to in a given market or bet.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_F" className="letter " data-letter="f">
                  <ul>
                          <li>
                              <p id="fav" className="glossary-item">favorite <em>(see also <a href="#chalk">Chalk</a>, <a href="#jolly">Jolly</a>)</em></p>
                              <p>The selection that the markets sees as the most probable winner of a given event. The quoted odds reflect the extent to which the choice is favored.</p>
                          </li>
                          <li>
                              <p id="first-half" className="glossary-item">First half bet <em>(see also <a href="#second-half">Second half</a>, <a href="#quarter-b">Quarter bet</a>)</em></p>
                              <p>A bet on the outcome of the first half of a game only.</p>
                          </li>
                          <li>
                              <p id="first-goal" className="glossary-item">First/last goal scorer</p>
                              <p>A bet on the specific scorer of the first or the last goal/try in a given game.</p>
                          </li>
                          <li>
                              <p id="fixed-odds" className="glossary-item">Fixed-odds betting <em>(see also <a href="#binary-b">Binary betting</a>, <a href="#spread-b">Spread betting</a>)</em></p>
                              <p>The type of betting offered by traditional bookmakers with odds fixed at the time the bet is struck, as opposed to other formats where odds/return is fluid.</p>
                          </li>
                          <li>
                              <p id="fra-odds" className="glossary-item">Fractional&nbsp;odds</p>
                              <p>Odds expression (most commonly used in the UK) which presents odds in a fractional format.</p>
                          </li>
                          <li>
                              <p id="future" className="glossary-item">Future <em>(see also <a href="#ante-p">Ante-post</a>, <a href="#prop">Proposition</a>, <a href="#special">Special</a>)</em></p>
                              <p>Odds for the winner of a specific future event often posted far in advance of it occurring. Examples include the EPL winner, Super Bowl, the World Series, the Stanley Cup, or the NBA Championship this is called a Future bet.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_G" className="letter " data-letter="g">
                  <ul>
                          <li>
                              <p id="grand-sal" className="glossary-item">Grand Salami</p>
                              <p></p><p>Betting on the grand total of goals scored in all the listed games of the day within a specific league e.g. EPL as an Over/Under.&nbsp;</p><p></p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_H" className="letter " data-letter="h">
                  <ul>
                          <li>
                              <p id="half-time-b" className="glossary-item">Half time bet <em>(see also <a href="#first-half">First half bet</a>)</em></p>
                              <p>A bet on the result of the first half of a game only.</p>
                          </li>
                          <li>
                              <p id="half-handicap" className="glossary-item">Half-ball handicap</p>
                              <p>A Handicap which is 0.5 of a goal or point.</p>
                          </li>
                          <li>
                              <p id="handicap" className="glossary-item">Handicap</p>
                              <p>A numerical figure set by the bookmaker to counter the perceived bias in abilities of opponents - this provides more balanced odds.</p>
                          </li>
                          <li>
                              <p id="handicapper" className="glossary-item">Handicapper</p>
                              <p>Someone who uses maths based rating systems to forecast outcomes on sporting events and place bets accordingly.</p>
                          </li>
                          <li>
                              <p id="handicapping" className="glossary-item">Handicapping</p>
                              <p>Forecasting the outcome of sporting events using maths based rating systems and placing bets accordingly.</p>
                          </li>
                          <li>
                              <p id="handle" className="glossary-item">Handle</p>
                              <p>The total volume of bets on an event taken by a bookmaker.</p>
                          </li>
                          <li>
                              <p id="hedge" className="glossary-item">Hedging <em>(see also <a href="#arbitrage">Arbitrage</a>)</em></p>
                              <p>Betting on both sides of a market, or several selections within a market, to exploit the advantage of price discrepancies, or limit losses. For more information, read our guide on how to hedge a bet for guaranteed profit.</p>
                          </li>
                          <li>
                              <p id="holding-your-own" className="glossary-item">Holding your own</p>
                              <p>Neither winning nor losing, just breaking even.</p>
                          </li>
                          <li>
                              <p id="hfa" className="glossary-item">Home field advantage</p>
                              <p>Often abbreviated to HFA, refers to the perceived advantages enjoyed by the home team.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_I" className="letter " data-letter="i">
                  <ul>
                          <li>
                              <p id="if-bet" className="glossary-item">If bet</p>
                              <p>Multiple bets which are conditional on a sequence of outcomes.</p>
                          </li>
                          <li>
                              <p id="in-play-b" className="glossary-item">In-play betting <em>(see also <a href="live-bet">Live-betting</a>)</em></p>
                              <p><style type="text/css">
                </style>
                </p><p className="p1">Betting on an event that is in progress. Regular betting markets close once the event starts, in-betting odds reflect the progress of the event in real time.</p><p></p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_J" className="letter " data-letter="j">
                  <ul>
                          <li>
                              <p id="joint-fav" className="glossary-item">Joint favorite</p>
                              <p>One of two selections priced as favorite.</p>
                          </li>
                          <li>
                              <p id="jolly" className="glossary-item">Jolly <em>(see also <a href="#fav">favorite</a>, <a href="#chalk">Chalk</a>)</em></p>
                              <p><style type="text/css">
              
                </style>
                <style type="text/css">
                </style>
                </p><p className="p1">UK slang for favorite.</p><p></p>
                          </li>
                          <li>
                              <p id="juice" className="glossary-item">Juice (see also <a href="#commission">Commission</a>, <a href="#margin">Margin</a>, <a href="#vig">Vigorish</a>)</p>
                              <p>The implied cost of placing a bet set by the bookmaker. Bookmakers inflate the perceived likelihood of an event - as represented in their odds - suggesting it is more likely than underlying probability.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_K" className="letter " data-letter="k">
                  <ul>
                          <li>
                              <p id="kelly-cri" className="glossary-item">Kelly Criterion <em>(see also <a href="#stake-method">Staking method</a>)</em></p>
                              <p>Popular staking method which suggests that stake should be proportional to the perceived edge.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_L" className="letter " data-letter="l">
                  <ul>
                          <li>
                              <p id="landing-three" className="glossary-item">Landing on three/seven</p>
                              <p>Phrase used to describe the most statistically common final-score differential in NFL.</p>
                          </li>
                          <li>
                              <p id="laying-points" className="glossary-item">Laying the points</p>
                              <p>Backing the favorite on the Points Spread and therefore accepting the points Handicap.</p>
                          </li>
                          <li>
                              <p id="layoff" className="glossary-item">Layoff</p>
                              <p>Where a bookmaker reduces liability by covering a bet at another bookmaker; or where an individual bettor reduces risk, limits losses or locks in a profit by backing both sides of a market, or several selections within a market.</p>
                          </li>
                          <li>
                              <p id="limit" className="glossary-item">Limit</p>
                              <p>Maximum bet amount allowed.</p>
                          </li>
                          <li>
                              <p id="line" className="glossary-item">Line <em>(see also <a href="#price">Price</a>, <a href="#odds">Odds</a>)</em></p>
                              <p>Another word for odds (most common in North America).</p>
                          </li>
                          <li>
                              <p id="linemaker" className="glossary-item">Linemaker <em>(see also <a href="#oddsmaker">Oddsmaker</a>)</em></p>
                              <p>Person responsible for setting the lines/odds at a bookmaker.</p>
                          </li>
                          <li>
                              <p id="listed-pitch" className="glossary-item">Listed pitchers</p>
                              <p>A baseball bet conditional on the named pitchers starting the game, otherwise void.</p>
                          </li>
                          <li>
                              <p id="live-bet" className="glossary-item">Live-betting <em>(see also <a href="#in-play-b">In-play betting</a>)</em></p>
                              <p>Betting on an event that is in progress. Regular betting markets close once the event starts, live-betting odds reflect the progress of the event in real time.</p>
                          </li>
                          <li>
                              <p id="lock" className="glossary-item">Lock <em>(see also <a href="#banker">Banker</a>)</em></p>
                              <p>Selection which is considered especially likely to occur; often the cornerstone of a Multiple bet.</p>
                          </li>
                          <li>
                              <p id="longshot" className="glossary-item">Longshot</p>
                              <p>A selection with long odds (very low probability) suggesting it an unlikely to winner, but offering a proportionately high return.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_M" className="letter " data-letter="m">
                  <ul>
                          <li>
                              <p id="margin" className="glossary-item">Margin <em>(see also <a href="#commission">Commission</a>, <a href="#juice">Juice</a>, <a href="#vig">Vigorish</a>)</em></p>
                              <p>The implied cost of placing a bet set by the bookmaker. Bookmakers inflate the perceived likelihood of an event - as represented in their odds - suggesting it is more likely than underlying probability.</p>
                          </li>
                          <li>
                              <p id="match-b" className="glossary-item">Match bet</p>
                              <p>A bet that focuses on the performance of two variables against each other within an event (e.g. which of two horses will finish first).</p>
                          </li>
                          <li>
                              <p id="middle" className="glossary-item">Middle</p>
                              <p>A situation where you win on both sides of the same bet by exploiting odds/points movements/discrepancies over time.</p>
                          </li>
                          <li>
                              <p id="money-l" className="glossary-item">Money Line</p>
                              <p></p><p>A bet on the outcome of a match/game. One of three basic bet types .</p><p></p>
                          </li>
                          <li>
                              <p id="multiple" className="glossary-item">Multiple (see also <a href="#accum">Accumulator</a>, <a href="#parlay">Parlay</a>)</p>
                              <p>A combination of dependant bets offering proportionately higher returns, often using standardised permutations:
                </p><p>Double – 1 bet covering two co-dependant selections</p>
                <p>Treble – 1 bets covering three co-dependant selections</p>
                <p>Trixie – 4 bets covering limited permutations of three selections (1 treble, 3 doubles)</p>
                <p>Patent – 7 bets covering all permutations of three selections (1 treble, 3 doubles, 3 singles)</p>
                <p>Yankie – 11 bets covering limited permutations of four selections (1 four-timer, 4 trebles, 6 doubles)</p>
                <p>Lucky 15 - &nbsp;15 bets covering all permutations of four selections (1 four-timer, 4 trebles, 6 doubles, 4 singles)</p>
                <p>Lucky 31 – 31 bets covering all permutations of five selections (5 singles, 10 doubles, 10 trebles, 5 four-timers and a five-timer)</p>
                <p>Bets covering permutations of higher numbers of selections exist such as Canadian (5), Heinz (6), Super Heinz (7), Goliath (8)</p><p></p>
                          </li>
                          <li>
                              <p id="mvp" className="glossary-item">MVP</p>
                              <p>Bets placed on an individual player to be the Most Valuable Player over a season or series throughout a competition (typically basketball and the NBA).</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_N" className="letter " data-letter="n">
                  <ul>
                          <li>
                              <p id="nap" className="glossary-item">Nap</p>
                              <p>Term used to denote a tipster’s most confident selection.</p>
                          </li>
                          <li>
                              <p id="no-action" className="glossary-item">No action</p>
                              <p>A bet which for whatever reason is voided, resulting in&nbsp;no win/loss.</p>
                          </li>
                          <li>
                              <p id="non-run" className="glossary-item">Non-runner</p>
                              <p>Selection that will not participate in any given event.</p>
                          </li>
                          <li>
                              <p id="nov-b" className="glossary-item">Novelty bet <em>(see also <a href="#special">Special</a>)</em></p>
                              <p>A bet on an event which cannot be easily assessed in common handicapping terms, and is offered for its novelty value (e.g. Winner of a reality TV show).</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_O" className="letter " data-letter="o">
                  <ul>
                          <li>
                              <p id="odds" className="glossary-item">Odds <em>(see also <a href="#line">Line</a>, <a href="#price">Price</a>)</em></p>
                              <p>A representation of the perceived frequency of an event derived from the underlying probability which enables betting.</p>
                          </li>
                          <li>
                              <p id="odds-form" className="glossary-item">Odds format</p>
                              <p>Different international conventions that have been developed to represent odds.
                </p><p></p>
                <p>Where a coin-toss has 50% probability for heads there are three common ways to represent the odds of the event:</p>
                <p>Europe (<span>Decimal</span>) - 2.0</p>
                <p>UK (Fractions) - Evens (or 1/1, or even money)</p>
                <p>US (<span>American</span>) - +100; a (+) indicates the amount that would be won for every 100 bet placed. (-) indicates how much must be bet to win 100.</p><p></p>
                          </li>
                          <li>
                              <p id="odds-fav" className="glossary-item">Odds on favorite</p>
                              <p>A horse, team, or individual where the odds imply a chance of greater than 50%.</p>
                          </li>
                          <li>
                              <p id="oddsmaker" className="glossary-item">Oddsmaker <em>(see also <a href="#linemaker">Linemaker</a>)</em></p>
                              <p>Person responsible for setting the lines/odds at a bookmaker.</p>
                          </li>
                          <li>
                              <p id="off-board" className="glossary-item">Off the board</p>
                              <p>A game on which the bookmaker will not accept bets.</p>
                          </li>
                          <li>
                              <p id="outright-b" className="glossary-item">Outright betting <em>(see also <a href="#ante-p">Ante-post</a>, <a href="#future">Future</a>, <a href="#special">Special</a>)</em></p>
                              <p>Placing a bet on the winner of an entire competition, instead of a single match (e.g. the World Cup or the EPL).</p>
                          </li>
                          <li>
                              <p id="over" className="glossary-item">Over</p>
                              <p>Bet on whether the total of any given variable will be over the mark set by a bookmaker. One of three basic bet types.</p>
                          </li>
                          <li>
                              <p id="overbroke" className="glossary-item">Overbroke</p>
                              <p>Term to describe when the betting percentage of a market is less than 100% and therefore providing an advantage to the bettor and the opposite&nbsp;to the bookmaker.</p>
                          </li>
                          <li>
                              <p id="overround" className="glossary-item">Overround</p>
                              <p>Term to describe when the betting percentage of a market is above 100% and therefore providing an advantage to the bookmaker and the opposite&nbsp;to the bettor.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_P" className="letter " data-letter="p">
                  <ul>
                          <li>
                              <p id="parlay" className="glossary-item">Parlay <em>(see also <a href="#multiple">Multiple</a>, <a href="#accum">Accumulator</a>)</em></p>
                              <p>Where more than one bet is combined, the odds accumulated and success is dependent on all selections winning.</p>
                          </li>
                          <li>
                              <p id="payout" className="glossary-item">Payout</p>
                              <p>The return on a winning bet.</p>
                          </li>
                          <li>
                              <p id="pick-em" className="glossary-item">Pick 'em</p>
                              <p>When there is a zero Handicap and neither team is favored. Also called a "pick" in sports betting terms.</p>
                          </li>
                          <li>
                              <p id="points-spr" className="glossary-item">Points Spread</p>
                              <p>The measure of perceived difference in the abilities of participants in a given event as illustrated in the Handicap/Spread market.
                </p><p>The favorite is always indicated by a minus sign (e.g. -8.5pts) and the underdog by a plus sign (e.g.+8.5pts).</p>
                <p>For betting purposes, the outcome of the game is determined by taking the actual game score and finding the difference between the scores of the two teams playing (called the points spread or just the "spread").</p><p></p>
                          </li>
                          <li>
                              <p id="post-time" className="glossary-item">Post time</p>
                              <p>Scheduled start time.</p>
                          </li>
                          <li>
                              <p id="power-rank" className="glossary-item">Power-ranking</p>
                              <p>System of ratings based on historical data which is used by bettors for predictive purposes.</p>
                          </li>
                          <li>
                              <p id="price" className="glossary-item">Price <em>(see also <a href="#odds">Odds</a>, <a href="#line">Line</a>)</em></p>
                              <p>Another term for odds, line or points spread.</p>
                          </li>
                          <li>
                              <p id="prop" className="glossary-item">Prop (Proposition) bet <em>(see also <a href="#nov-b">Novelty bet</a>, <a href="#special">Special</a>)</em></p>
                              <p>A derivative bet on events within a match or game (e.g. first goal scorer, or time of first yellow card).</p>
                          </li>
                          <li>
                              <p id="public-mon" className="glossary-item">Public money</p>
                              <p>The influence of bets from recreational punters normally on the favorite, and struck close to post time.</p>
                          </li>
                          <li>
                              <p id="push" className="glossary-item">Push <em>(see also <a href="#draw">Draw</a>, <a href="#tie">Tie</a>)</em></p>
                              <p>When the contest ends with no winner or loser for betting purposes and stakes are refunded.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_Q" className="letter " data-letter="q">
                  <ul>
                          <li>
                              <p id="quarter-b" className="glossary-item">Quarter bet (see also <a href="#first-half">First half</a>, <a href="#second-half">Second half bet</a>)</p>
                              <p>A bet on the outcome of one specific quarter of&nbsp;a game only.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_R" className="letter " data-letter="r">
                  <ul>
                          <li>
                              <p id="rag" className="glossary-item">Rag</p>
                              <p>UK slang for longshot or outsider.</p>
                          </li>
                          <li>
                              <p id="reload-bon" className="glossary-item">Reload bonus</p>
                              <p>A bonus that re-applies when account holders deposit fresh funds.</p>
                          </li>
                          <li>
                              <p id="rotation-num" className="glossary-item">Rotation number</p>
                              <p>A numbering system used by Las Vegas to order bets, often used by bookmakers to assign unique IDs to markets.</p>
                          </li>
                          <li>
                              <p id="round-rob" className="glossary-item">Round Robin</p>
                              <p>A specific type of Multiple bet combining three selections in a 10 combination bet; three doubles, one treble and three up-and-down single stakes about pairs.</p>
                          </li>
                          <li>
                              <p id="run-line" className="glossary-item">Run line</p>
                              <p>The Spread/Handicap applied specifically to baseball and relating to the number of runs in the game.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_S" className="letter " data-letter="s">
                  <ul>
                          <li>
                              <p id="scalping" className="glossary-item">Scalping</p>
                              <p>Exploiting price/bonus discrepancies between various bookmakers for profit.</p>
                          </li>
                          <li>
                              <p id="second-half" className="glossary-item">Second half bet (see also <a href="#first-half">First half</a>, <a href="#quarter-b">Quarter bet</a>)</p>
                              <p>A bet on the outcome of the second&nbsp;half of a game only.</p>
                          </li>
                          <li>
                              <p id="sell-points" className="glossary-item">Sell (points) (see also <a href="#buy-points">Buy points</a>)</p>
                              <p>Decreasing a&nbsp;point spread advantage in exchange for increased odds.</p>
                          </li>
                          <li>
                              <p id="sharp" className="glossary-item">Sharp</p>
                              <p>A sophisticated or professional bettor.</p>
                          </li>
                          <li>
                              <p id="sp" className="glossary-item">SP</p>
                              <p>Abbreviation for "starting price", which is the official odds returned in UK horse racing/greyhound racing.</p>
                          </li>
                          <li>
                              <p id="special" className="glossary-item">Special <em>(see also <a href="#future">Future</a>, <a href="#nov-b">Novelty bet</a>, <a href="#outright-b">Outright betting</a>)</em></p>
                              <p>Any bet outside of the three basic types or their derivatives (Money Line/1x2, Handicap/Spread, Total).</p>
                          </li>
                          <li>
                              <p id="split-handicap" className="glossary-item">Split-ball handicap</p>
                              <p>Where a Handicap bet is split into two separate bets one at each handicap level provided by the bookmaker, whether it is on Asian Handicaps or Totals etc.</p>
                          </li>
                          <li>
                              <p id="sportsbook" className="glossary-item">Sportsbook <em>(see also <a href="#book">Book</a>)</em></p>
                              <p>Another name for a Bookmaker.</p>
                          </li>
                          <li>
                              <p id="spread" className="glossary-item">Spread <em>(see also <a href="#handicap">Handicap</a>)</em></p>
                              <p>The predicted scoring differential between two opponents as quoted by a sportsbook.</p>
                          </li>
                          <li>
                              <p id="spread-b" className="glossary-item">Spread betting</p>
                              <p>An alternative to fixed odds betting where a Spread is offered on the outcome of an event and a bettor decides whether the outcome will be higher or lower. The loss or return is the multiple of their unit stake X the difference between the result and the Spread taken.</p>
                          </li>
                          <li>
                              <p id="square" className="glossary-item">Square</p>
                              <p>A betting novice or amateur.</p>
                          </li>
                          <li>
                              <p id="stake" className="glossary-item">Stake</p>
                              <p>The amount of money a bettor risks on a specific bet.</p>
                          </li>
                          <li>
                              <p id="stake-method" className="glossary-item">Staking method</p>
                              <p>Method of calculating the appropriate amount of <span>money to place on a bet</span> for consistent profit making as part of a betting strategy.</p>
                          </li>
                          <li>
                              <p id="steam" className="glossary-item">Steam</p>
                              <p>When odds move rapidly due to a large volume of bets over a short period of time. Most "steam games" do not necessarily reflect objective circumstances, but can often reflect herd instinct or inherent biases toward favored teams.</p>
                          </li>
                          <li>
                              <p id="straight-b" className="glossary-item">Straight bet</p>
                              <p>A bet on the outcome of one of the three basic bet types.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_T" className="letter " data-letter="t">
                  <ul>
                          <li>
                              <p id="take-points" className="glossary-item">Taking the points</p>
                              <p>Betting on the underdog and receiving the advantage of the positive Point Spread.</p>
                          </li>
                          <li>
                              <p id="teaser" className="glossary-item">Teaser</p>
                              <p>A special type of sports parlay which offers adjusted point spreads or totals for the constituent bets. The cost of the adjusted Spreads/Totals (Teasing) is reflected in the odds</p>
                          </li>
                          <li>
                              <p id="ticket" className="glossary-item">Ticket</p>
                              <p>A sports bet, historically confirmed by a physical ticket, but still applied to online bets.</p>
                          </li>
                          <li>
                              <p id="tie" className="glossary-item">Tie (see also <a href="#draw">Draw</a>, <a href="#push">Push</a>)</p>
                              <p>A bet in which no money is lost nor won because there wasn’t a positive outcome for the purposes of the bet.</p>
                          </li>
                          <li>
                              <p id="tip" className="glossary-item">Tip</p>
                              <p>A betting prediction provided by someone with perceived knowledge of the event/competitors.</p>
                          </li>
                          <li>
                              <p id="tipster" className="glossary-item">Tipster</p>
                              <p>Someone who provides tips.</p>
                          </li>
                          <li>
                              <p id="tissue-p" className="glossary-item">Tissue price</p>
                              <p>Guide price which is only a very tentative guesstimate and likely to quickly change.</p>
                          </li>
                          <li>
                              <p id="total" className="glossary-item">Total</p>
                              <p>The combined amount of runs, points or goals scored by both teams during the game. One of the </p><p>three basic bet types. Bets can be placed on whether the Total will be higher or lower than the number set by the bookmaker.</p>
                          </li>
                          <li>
                              <p id="totals-b" className="glossary-item">Totals bet</p>
                              <p>Where the bettor speculates that the total score by both teams/players in a game will be more or less than the level posted by the bookmaker.</p>
                          </li>
                          <li>
                              <p id="tout" className="glossary-item">Tout</p>
                              <p>Someone who sells betting tips.</p>
                          </li>
                          <li>
                              <p id="true-odds" className="glossary-item">True odds</p>
                              <p>The true reflection of the underlying <a href="http://www.pinnacle.com/en/betting-articles/betting-strategy/probability-odds-payouts">probability</a> of an event to which a bookmaker will add their margin.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_U" className="letter " data-letter="u">
                  <ul>
                          <li>
                              <p id="under" className="glossary-item">Under</p>
                              <p>Bet on whether the total of any given variable will be under the mark set by the bookmaker.</p>
                          </li>
                          <li>
                              <p id="underdog" className="glossary-item">Underdog</p>
                              <p>Team perceived to be least likely to win.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_V" className="letter " data-letter="v">
                  <ul>
                          <li>
                              <p id="value" className="glossary-item">Value</p>
                              <p>Betting at odds that represent a lower chance than the underlying probability and therefore offer 'value' to the bettor in terms of increased potential profit.</p>
                          </li>
                          <li>
                              <p id="vig" className="glossary-item">Vigorish <em>(see also <a href="#commission">Commission</a>, <a href="#margin">Margin</a>, <a href="#juice">Juice</a>)</em></p>
                              <p>North American term for the implied <a href="http://www.pinnacle.com/en/betting-articles/educational/how-much-is-your-bookmaker-charging-you">charge that a bookmaker adds</a> for taking bets on any given market, traditionally 10% for Money Line, Points Spread and Totals.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_W" className="letter " data-letter="w">
                  <ul>
                          <li>
                              <p id="wager" className="glossary-item">Wager <em>(see also <a href="#bet">Bet</a>)</em></p>
                              <p>A form of placing money on odds offered by a bookmaker.</p>
                          </li>
                          <li>
                              <p id="wise-guy" className="glossary-item">Wise guy</p>
                              <p>A well-informed or knowledgeable handicapper or bettor.</p>
                          </li>
                  </ul>
                </div>
                
                <div id="letter_X" className="letter hidden" data-letter="x">
                  <ul>
                  </ul>
                </div>
                
                <div id="letter_Y" className="letter hidden" data-letter="y">
                  <ul>
                  </ul>
                </div>
                
                <div id="letter_Z" className="letter hidden" data-letter="z">
                  <ul>
                  </ul>
                </div>
                            </div>
  </Container>
);

export default FAQ;