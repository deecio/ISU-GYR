<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

	<title>PHP Quiz</title>

	<link rel="stylesheet" type="text/css" href="css/style.css" />
</head>

<body>

	<div id="page-wrap">

		<h1>How Green Are You?</h1>

        <?php

            $answer1 = $_POST['question-1-answers'];
            $answer2 = $_POST['question-2-answers'];
            $answer3 = $_POST['question-3-answers'];
            $answer4 = $_POST['question-4-answers'];
            $answer5 = $_POST['question-5-answers'];

						echo $answer2;
						echo $answer3;

            $totalCorrect = 0;

            if ($answer1 == "A") { $totalCorrect++; }
            if ($answer2 == "A" || $answer2 == "B" || $answer2 == "C" || $answer2 == "D" ||$answer2 == "E" ) { $totalCorrect++; }
            if ($answer3 == "C") { $totalCorrect++; }
            if ($answer4 == "B") { $totalCorrect++; }
            if ($answer5) { $totalCorrect++; }

            echo "<div id='results'>Your Green Score: $totalCorrect</div>";

        ?>

	</div>

	<script type="text/javascript">
	var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
	</script>
	<script type="text/javascript">
	var pageTracker = _gat._getTracker("UA-68528-29");
	pageTracker._initData();
	pageTracker._trackPageview();
	</script>

</body>

</html>
