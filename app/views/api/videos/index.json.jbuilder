@videos.each do |video|
    json.set! video.id do
        video
    end 
end