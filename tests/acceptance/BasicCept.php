<?php
$I = new WebGuy($scenario);
$I->wantTo('check that javascript is being parsed on the page');
$I->see('Javascript Test!');
