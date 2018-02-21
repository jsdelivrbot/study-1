CREATE TABLE order_line (
  order_line_id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY
  ,  shipment_date TIMESTAMPTZ
  ,  irsaliye_kg TEXT
  ,  tesis TEXT
  ,  yas_toz BOOLEAN
  ) ;
CREATE TABLE plan (
  plan_id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY
  , title TEXT
  ) ;
CREATE TABLE pln_orl ( --df: mult=2.0
  plan_id INT NOT NULL REFERENCES plan (plan_id)
  ,  order_line_id INT NOT NULL REFERENCES order_line (order_line_id)
  ) ;

