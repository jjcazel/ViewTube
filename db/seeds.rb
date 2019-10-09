# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
user = User.create!(email: 'user@gmail.com', password: 'password1', first_name: "Bill", last_name: "Thornton" )
fred = User.create!(email: 'freddy@gmail.com', password: 'password', first_name: "Fred", last_name: "Armisen" )
Bob = User.create!(email: 'bobby@gmail.com', password: 'password5', first_name: "Robert", last_name: "Deniro" )

Video.destroy_all
v1 = Video.create!(title: "Test", description: "Chipmunk", creator_id: user.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/dramatic_chipmunk360p.mp4')
v1.video.attach(io: file, filename: 'dramatic_chipmunk360p.mp4')

v2 = Video.create!(title: "Test2", description: "Developers!", creator_id: fred.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/steve_ballmer_developers360p.mp4')
v2.video.attach(io: file, filename: 'steve_ballmer_developers360p.mp4')

v3 = Video.create!(title: "Test3", description: "oooo, ahh!", creator_id: Bob.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/FireworksSlowMotion.mp4')
v3.video.attach(io: file, filename: 'FireworksSlowMotion.mp4')

v4 = Video.create!(title: "Test4", description: "Make It Count!", creator_id: fred.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/Make+It+Count.mp4')
v4.video.attach(io: file, filename: 'Make It Count.mp4')

v5 = Video.create!(title: "Test5", description: "How does it sound?", creator_id: Bob.id)
file = open('https://viewtube2-dev.s3.amazonaws.com/jurassic_park_theme_song_melodica_cover360p.mp4')
v5.video.attach(io: file, filename: 'jurassic_park_theme_song_melodica_cover360p.mp4')