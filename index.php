<?php
include('includes/read.php');
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Home</title>
<link href="css/foundation.css" rel="stylesheet" type="text/css" media="screen"> 
<link href="css/main.css" rel="stylesheet" type="text/css" media="screen"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
<div id="wrap">

<!-- Navigation -->
<div class="contain-to-grid sticky">
   <nav class="top-bar" data-topbar>
        <section class="top-bar-section">
          <div class="logo-wrapper hide-for-small-only">
            <div class="logo">
              <img src="img/logoArrow.png">
            </div>
          </div>
          <!-- Right Nav Section -->
          <ul class="right">
           <li><a class="button" href="index.html">Home</a></li>
           <li><a class="button" href="about-chantry.html">About</a></li>
           <li><a class="button" href="photo.html">Gallery</a></li>
          </ul>
          <!-- Left Nav Section -->
          <ul class="left">
           <li><a class="button" href="contact.html">Contact</a></li>
           <li><a class="button" href="booking.html">Booking</a></li>
           <li><a class="button">Donation</a></li>
              </ul>
            </li>
          </ul>
        </section>
      </nav>
</div>
<!-- /navigation -->

<!-- /Header Image -->
<img src="img/Chantry Island 99a.JPG">
<!-- /Header Image -->

<!-- /Video Section -->
<div class="align-top-margin">
<div class="row-width">
<div class="responsive-embed widescreen">
  <iframe class="radius-style" src="https://www.youtube.com/embed/WUgvvPRH7Oc" frameborder="0" allowfullscreen></iframe>
</div>
</div>
</div>
<!-- /Video Section <iframe class="video-detail" src="https://www.youtube.com/embed/iRGhXvkluwA" frameborder="0" allowfullscreen></iframe>-->

<!-- /Column Section -->
<div class="small-up-3 medium-up-3 large-up-3 text-center align-top-margin align-bottom-padding">
<div class="column">
<img class="icons" src="img/3447bf4f.png">
<?php
$row = getSingle('Saugeen Shores');
$fetch = mysqli_fetch_array($row);
$content = $fetch['content'];
$header = $fetch['name'];
?>
<h3 id="SaugeenShores"><?php  echo "{$header}"; ?></h3><p><?php echo "{$content}"; ?></p>
</div>
<div class="column">
<img class="icons" src="img/256-256-c8c2a2224743fec679813aa5e8a9e515.png">
<?php
$row = getSingle('Explore the Bruce');
$fetch = mysqli_fetch_array($row);
$content = $fetch['content'];
$header = $fetch['name'];
?>
<h3><?php  echo "{$header}"; ?></h3><p><?php echo "{$content}"; ?></p>
</div>
<div class="column">
<img class="icons" src="img/sport-activities-tennis-icon-512x512-pixel-9.png">
<?php
$row = getSingle('Southampton tennis club');
$fetch = mysqli_fetch_array($row);
$content = $fetch['content'];
$header = $fetch['name'];
?>
<h3><?php  echo "{$header}"; ?></h3>
<p><?php echo "{$content}"; ?></p>
</div>
</div>
<!-- /Column Section -->

</div> <!-- /Wrap Close -->
<script src="js/main.js"></script>

</body>
</html>