# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Demo = User.create!(email: 'Demo@gmail.com', password: 'password1', first_name: "Demo", last_name: "user" )
Fred = User.create!(email: 'freddy@gmail.com', password: 'password', first_name: "Fred", last_name: "Armisen" )
Bob = User.create!(email: 'bobby@gmail.com', password: 'password2', first_name: "Robert", last_name: "Deniro" )
Casey = User.create!(email: 'casey@gmail.com', password: 'password5', first_name: "Casey", last_name: "Neistat" )
Amie = User.create!(email: 'amie@gmail.com', password: 'password3', first_name: "Amie", last_name: "Brehm" )
Will = User.create!(email: 'will@gmail.com', password: 'password4', first_name: "Will", last_name: "Smith" )
Reverie = User.create!(email: 'reverie@gmail.com', password: 'password6', first_name: "Reverie", last_name: "Cazel" )

Video.destroy_all
v1 = Video.create!(title: "Dah, dah ,dah!!", description: " Dramatic Chipmunk (viral)", creator_id: Demo.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/dramatic_chipmunk360p.mp4')
v1.video.attach(io: file, filename: 'dramatic_chipmunk360p.mp4')

v2 = Video.create!(title: "Developers", description: "Disgusting, sweaty man screaming...", creator_id: Fred.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/steve_ballmer_developers360p.mp4')
v2.video.attach(io: file, filename: 'steve_ballmer_developers360p.mp4')

v3 = Video.create!(title: "Fireworks in slow motion", description: "oooo, ahh! (no sound)", creator_id: Bob.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/FireworksSlowMotion.mp4')
v3.video.attach(io: file, filename: 'FireworksSlowMotion.mp4')

v4 = Video.create!(title: "Make It Count- Nike", description: "My commercial for Nike", creator_id: Casey.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/Make+It+Count.mp4')
v4.video.attach(io: file, filename: 'Make It Count.mp4')

v5 = Video.create!(title: "Jurrasic Park clip with additional music", description: "How does it sound?", creator_id: Amie.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/jurassic_park_theme_song_melodica_cover360p.mp4')
v5.video.attach(io: file, filename: 'jurassic_park_theme_song_melodica_cover360p.mp4')

v6 = Video.create!(title: "One Strange Rock TRAILER HD", description: "Hosted by Will Smith and Directed by Darren Arronofsky", creator_id: Will.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/%5Cone_strange_rock_trailer_national_geographic_1080p.mp4')
v6.video.attach(io: file, filename: '\one_strange_rock_trailer_national_geographic_1080p.mp4')

v7 = Video.create!(title: "Old lady gets revenge (viral)", description: "Watch this!", creator_id: Amie.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/old_lady_road_rage_revenge_360p.mp4')
v7.video.attach(io: file, filename: 'old_lady_road_rage_revenge_360p.mp4')

v8 = Video.create!(title: "Song of the Sea HD TRAILER", description: "Reverie's movie!", creator_id: Reverie.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/song_of_the_sea_official_us_release_trailer_irish_animated_movie_hd_720p.mp4')
v8.video.attach(io: file, filename: 'song_of_the_sea_official_us_release_trailer_irish_animated_movie_hd_720p.mp4')