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
file = open('<your_file_url>')
v1 = Video.create!(title: "Test", Descitption: "Good Stuff", creator_id: 6)