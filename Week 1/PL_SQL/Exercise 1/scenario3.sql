DECLARE
    CURSOR loan_cursor IS
        SELECT c.name, l.due_date
        FROM CUSTOMERS c
        JOIN LOANS l ON c.customer_id = l.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR rec IN loan_cursor LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear ' || rec.name ||
            ', your loan is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/