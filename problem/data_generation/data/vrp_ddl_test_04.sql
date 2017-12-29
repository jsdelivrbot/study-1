-- df place_enum: word=./data/place_enum.txt
CREATE TABLE place (
  place_id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY
  ,  place_enum INT
  -- df: text=place_enum length=1 
  ,  address TEXT 
  ) ;

