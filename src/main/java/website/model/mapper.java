package website.model;

import org.springframework.jdbc.core.RowMapper;
import website.DTO.dataDTO;

import java.sql.ResultSet;
import java.sql.SQLException;

public class mapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new dataDTO(rs.getString("names"));
    }
}
