<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

	<title>Green Quiz</title>

	<link rel="stylesheet" type="text/css" href="css/style.css" />
</head>

<body>

	<div id="page-wrap">

		<h1>How Green Are You?</h1>

		<div id="blanket" style="display:none;"></div>
		<div id="popUpDiv" style="display:none;">
		<!-- <a href="#" onclick=”popup(‘popUpDiv’)”>X</a> -->
		</div>

		<form action="grade.php" method="post" id="quiz">

            <ol>

                <li>

                    <h3>Do you think it is important to green your home?</h3>

                    <div>
                        <input type="radio" name="question-1-answers" id="question-1-answers-A" value="A" />
                        <label for="question-1-answers-A">Yes</label>
                    </div>

                    <div>
                        <input type="radio" name="question-1-answers" id="question-1-answers-B" value="B" />
                        <label for="question-1-answers-B">No</label>

                </li>

                <li>

                    <h3>What items do you have in your bedroom? <br> Check all that apply.</h3>

                    <div>
                        <input type="checkbox" name="question-2-answers" id="question-2-answers-A" value="A" />
                        <label for="question-2-answers-A">A) Lamp</label>
                    </div>

                    <div>
                        <input type="checkbox" name="question-2-answers" id="question-2-answers-B" value="B" />
                        <label for="question-2-answers-B">B) Television</label>
                    </div>

                    <div>
                        <input type="checkbox" name="question-2-answers" id="question-2-answers-C" value="C" />
                        <label for="question-2-answers-C">C) Phone/Computer Charger</label>
                    </div>

                    <div>
                        <input type="checkbox" name="question-2-answers" id="question-2-answers-D" value="D" />
                        <label for="question-2-answers-D">D) Speakers</label>
                    </div>

										<div>
                        <input type="checkbox" name="question-2-answers" id="question-2-answers-E" value="E" />
                        <label for="question-2-answers-E">E) Desktop</label>
                    </div>

                </li>

                <li>

                    <h3>Which of these items do you leave constantly plugged in? <br> Check all that apply.</h3>

										<div>
                        <input type="checkbox" name="question-3-answers" id="question-3-answers-A" value="A" />
                        <label for="question-3-answers-A">A) Lamp</label>
                    </div>

                    <div>
                        <input type="checkbox" name="question-3-answers" id="question-3-answers-B" value="B" />
                        <label for="question-2-answers-B">B) Television</label>
                    </div>

                    <div>
                        <input type="checkbox" name="question-3-answers" id="question-3-answers-C" value="C" />
                        <label for="question-2-answers-C">C) Phone/Computer Charger</label>
                    </div>

                    <div>
                        <input type="checkbox" name="question-3-answers" id="question-3-answers-D" value="D" />
                        <label for="question-2-answers-D">D) Speakers</label>
                    </div>

										<div>
                        <input type="checkbox" name="question-3-answers" id="question-3-answers-E" value="E" />
                        <label for="question-2-answers-E">E) Desktop</label>
                    </div>

                </li>

                <li>

                    <h3>Do you need to leave these items plugged In?</h3>

                    <div>
                        <input type="radio" name="question-4-answers" id="question-4-answers-A" value="A" />
                        <label for="question-4-answers-A">Yes</label>
                    </div>

                    <div>
                        <input type="radio" name="question-4-answers" id="question-4-answers-B" value="B" />
                        <label for="question-4-answers-B">No</label>
                    </div>

                </li>

                <li>

                    <h3>Have you considered unplugging them when you aren't using them (and would you be willing to)??</h3>

                    <div>
                        <input type="radio" name="question-5-answers" id="question-5-answers-A" value="A" />
                        <label for="question-5-answers-A">Yes</label>
                    </div>

                    <div>
                        <input type="radio" name="question-5-answers" id="question-5-answers-B" value="B" />
                        <label for="question-5-answers-B">No</label>
                    </div>

                </li>

            </ol>

            <input type="submit" value="Submit Quiz" />

		</form>

	</div>

</body>

</html>
