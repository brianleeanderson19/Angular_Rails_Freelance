10.times do |d|
  FreelanceDocument.create!(
    title: "Document #{d}", 
    description: "Here is the Description",
    file_url: "https://example.com",
    image_url: "https://static.pexels.com/photos/235310/pexels-photo-235310.jpeg" 
    )
end

