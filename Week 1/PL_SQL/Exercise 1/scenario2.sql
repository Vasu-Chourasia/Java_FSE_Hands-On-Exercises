BEGIN
    FOR rec IN (SELECT customer_id, balance FROM CUSTOMERS)
    LOOP
        IF rec.balance > 10000 THEN
            UPDATE CUSTOMERS
            SET isVIP = 'TRUE'
            WHERE customer_id = rec.customer_id;

            DBMS_OUTPUT.PUT_LINE('VIP set for Customer ID: ' || rec.customer_id);
        END IF;
    END LOOP;

    COMMIT;
END;
/