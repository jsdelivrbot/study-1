
-- data generated by /usr/local/bin/datafiller version 2.0.0 (r792 on 2014-03-23) for postgresql

-- fill table enum_value (5)
\echo # filling table enum_value (5)
COPY enum_value (enum_value_id) FROM STDIN (ENCODING 'utf-8');
1
2
3
4
5
\.

-- fill table place (10)
\echo # filling table place (10)
COPY place (place_id,place_enum,address) FROM STDIN (ENCODING 'utf-8');
1	3	address_4_
2	2	address_1_
3	5	address_9_9_9
4	5	address_7_
5	2	address_4_
6	2	address_6_6_6
7	2	address_4_
8	1	address_4_
9	2	address_9_9_9
10	1	address_6_6_6
\.

-- restart sequences

-- analyze modified tables
ANALYZE enum_value;
ANALYZE place;
