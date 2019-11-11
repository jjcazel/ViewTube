# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  image_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#

class User < ApplicationRecord

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  

  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, :password_digest, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :email, format: { with: VALID_EMAIL_REGEX, message: 'not a valid email' }

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :videos,
    foreign_key: :creator_id,
    class_name: :Video
  
  has_many :comments,
    foreign_key: :user_id,
    class_name: :Comment
  
  has_many :likes,
    class_name: :Like,
    foreign_key: :creator_id,
    dependent: :destroy

  has_many :views,
    foreign_key: :user_id,
    class_name: :View


  def self.find_by_credentials(identifier, password) # refactor to check the email and/or phone as well
    user = User.find_by(email: identifier) #|| User.find_by(phone: identifier)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
