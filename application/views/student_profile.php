<?php header('Content-Type:text/html;charset=utf-8'); ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Perfil estudiante</title>
		<link rel="stylesheet" id="skilltree_layout_css-css" href="<?=base_url();?>assets/css/layout.css" type="text/css" media="all">
		<link rel="stylesheet" id="default-css" href="<?=base_url();?>assets/css/plataforma.css" type="text/css" media="all">
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js"></script>
		<script type="text/javascript" src="<?=base_url();?>assets/js/scripts.js"></script>
	</head>
	<body>
		<div id="skilltree">
			<div class="ltIE9-hide">
				<div class="page open">
					<div class="talent-tree" id="_abc">
						<h2>Arbol de habilidades de <span id="username">.</span></h2>
						<!--ko foreach: skills-->
						<!--ko if: hasDependencies-->
						<div data-bind="css: { 'can-add-points': canAddPoints, 'has-points': hasPoints, 'has-max-points': hasMaxPoints }, attr: { 'data-skill-id': id }" class="skill">
							<div data-bind="css: { active: dependenciesFulfilled }" class="skill-dependency"></div>
						</div>
						<!--/ko-->
						<!--/ko-->
						<!--ko foreach: skills-->
						<div data-bind="css: { 'can-add-points': canAddPoints, 'has-points': hasPoints, 'has-max-points': hasMaxPoints }, attr: { 'data-skill-id': id }" class="skill">
							<div class="icon-container">
								<div class="icon"></div>
							</div>
							<div class="frame">
								<div class="tool-tip">
									<h3 data-bind="text: title" class="skill-name"></h3>
									
									<div data-bind="html: description" class="skill-description"></div>
									<div data-bind="text: helpMessage" class="help-message"></div>
									<!--ko if: nextRankDescription && canAddPoints-->
										<hr>
										<div data-bind="if: currentRankDescription" class="current-rank-description">Reto anterior: <span data-bind="	text: currentRankDescription"></span></div>
										<div data-bind="if: nextRankDescription" class="next-rank-description">Para obtener: <span data-bind="	text: nextRankDescription"></span></div>
									<!--/ko-->
									<!--ko if: canAddPoints-->
										<!--ko if: hasLinks-->
											<hr><h4>Enlaces útiles:</h4>
											<ul class="skill-links">
												<!--ko foreach: links-->
												<li><a data-bind="attr: { href: url }, text: label" target="_blank"></a></li>
												<!--/ko-->
											</ul>
										<!--/ko-->
									<!--/ko-->
									<!-- <ul class="stats"> -->
										<!--ko foreach: stats-->
										<!-- <li><span class="value">+<span data-bind="text: value"></span></span> <span data-bind="text: title" class="title"></span></li> -->
										<!--/ko-->
									<!-- </ul> -->
									<!--ko if: talentSummary-->
									<!-- <div class="talent-summary">Aprenderlo te convierte hace <span data-bind="text: talentSummary"></span></div> -->
									<!--/ko-->
									
								</div>
								<div class="skill-points"><span data-bind="text: points" class="points"></span>/<span data-bind="text: maxPoints" class="max-points"></span></div>
								<!-- <div data-bind="click: addPoint, rightClick: removePoint" class="hit-area"></div> -->
							</div>
						</div>
						<!--/ko-->
					</div>
				</div>
			</div>
			<div class="ltIE9-show ltIE9-warning">
				<h2>Actualiza tu navegador!</h2>
				<p>Has accedido a hack desde otroe spacio temporal. Por favor vuelve a una época actual, o prueba uno de estos navegadores:</p>
				<ul>
					<li><a href="http://google.com/chrome" target="_blank">Google Chrome</a></li>
					<li><a href="http://windows.microsoft.com/en-US/internet-explorer/download-ie" target="_blank">Microsoft Internet Explorer 10</a></li>
					<li><a href="www.mozilla.org/en-US/firefox" target="_blank">Mozilla Firefox</a></li>
				</ul>
			</div>
		</div>
		<div>
			Asistencia: <span id="attendance_number">.</span>
		</div>
		<div>
			Tareas Entregadas: <span id="homeworks_number">.</span>
		</div>
		
		
		<script type="text/javascript" src="<?=base_url();?>assets/vendor/knockout.min.js"></script>
		<script type="text/javascript" src="<?=base_url();?>assets/js/skilltree/skilltree.js"></script>
		<script type="text/javascript" src="<?=base_url();?>assets/js/skilltree_init.js"></script>

	</body>
</html>

	